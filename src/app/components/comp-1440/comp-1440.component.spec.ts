/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1440Component } from './comp-1440.component';

describe('Comp1440Component', () => {
  let component: Comp1440Component;
  let fixture: ComponentFixture<Comp1440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
