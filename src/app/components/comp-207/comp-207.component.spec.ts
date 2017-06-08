/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp207Component } from './comp-207.component';

describe('Comp207Component', () => {
  let component: Comp207Component;
  let fixture: ComponentFixture<Comp207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
