/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp771Component } from './comp-771.component';

describe('Comp771Component', () => {
  let component: Comp771Component;
  let fixture: ComponentFixture<Comp771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
