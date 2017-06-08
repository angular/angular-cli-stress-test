/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1104Component } from './comp-1104.component';

describe('Comp1104Component', () => {
  let component: Comp1104Component;
  let fixture: ComponentFixture<Comp1104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
