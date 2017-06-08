/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp440Component } from './comp-440.component';

describe('Comp440Component', () => {
  let component: Comp440Component;
  let fixture: ComponentFixture<Comp440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
