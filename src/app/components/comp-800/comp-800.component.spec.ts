/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp800Component } from './comp-800.component';

describe('Comp800Component', () => {
  let component: Comp800Component;
  let fixture: ComponentFixture<Comp800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
