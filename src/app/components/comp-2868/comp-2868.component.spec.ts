/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2868Component } from './comp-2868.component';

describe('Comp2868Component', () => {
  let component: Comp2868Component;
  let fixture: ComponentFixture<Comp2868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
