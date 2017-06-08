/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1207Component } from './comp-1207.component';

describe('Comp1207Component', () => {
  let component: Comp1207Component;
  let fixture: ComponentFixture<Comp1207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
