/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp818Component } from './comp-818.component';

describe('Comp818Component', () => {
  let component: Comp818Component;
  let fixture: ComponentFixture<Comp818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
