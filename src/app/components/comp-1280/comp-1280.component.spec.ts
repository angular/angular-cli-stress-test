/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1280Component } from './comp-1280.component';

describe('Comp1280Component', () => {
  let component: Comp1280Component;
  let fixture: ComponentFixture<Comp1280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
