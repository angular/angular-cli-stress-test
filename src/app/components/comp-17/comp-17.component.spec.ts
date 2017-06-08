/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp17Component } from './comp-17.component';

describe('Comp17Component', () => {
  let component: Comp17Component;
  let fixture: ComponentFixture<Comp17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
