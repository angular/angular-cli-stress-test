/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp266Component } from './comp-266.component';

describe('Comp266Component', () => {
  let component: Comp266Component;
  let fixture: ComponentFixture<Comp266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
