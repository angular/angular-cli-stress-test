/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp643Component } from './comp-643.component';

describe('Comp643Component', () => {
  let component: Comp643Component;
  let fixture: ComponentFixture<Comp643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
