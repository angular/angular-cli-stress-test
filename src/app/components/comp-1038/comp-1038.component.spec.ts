/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1038Component } from './comp-1038.component';

describe('Comp1038Component', () => {
  let component: Comp1038Component;
  let fixture: ComponentFixture<Comp1038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
