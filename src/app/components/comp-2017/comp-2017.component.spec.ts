/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2017Component } from './comp-2017.component';

describe('Comp2017Component', () => {
  let component: Comp2017Component;
  let fixture: ComponentFixture<Comp2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
