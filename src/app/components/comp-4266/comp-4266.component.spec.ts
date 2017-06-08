/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4266Component } from './comp-4266.component';

describe('Comp4266Component', () => {
  let component: Comp4266Component;
  let fixture: ComponentFixture<Comp4266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
