/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp838Component } from './comp-838.component';

describe('Comp838Component', () => {
  let component: Comp838Component;
  let fixture: ComponentFixture<Comp838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
