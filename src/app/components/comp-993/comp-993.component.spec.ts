/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp993Component } from './comp-993.component';

describe('Comp993Component', () => {
  let component: Comp993Component;
  let fixture: ComponentFixture<Comp993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
