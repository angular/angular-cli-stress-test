/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3204Component } from './comp-3204.component';

describe('Comp3204Component', () => {
  let component: Comp3204Component;
  let fixture: ComponentFixture<Comp3204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
