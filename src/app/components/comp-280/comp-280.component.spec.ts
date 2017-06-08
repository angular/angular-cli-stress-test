/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp280Component } from './comp-280.component';

describe('Comp280Component', () => {
  let component: Comp280Component;
  let fixture: ComponentFixture<Comp280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
