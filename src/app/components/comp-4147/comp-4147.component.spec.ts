/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4147Component } from './comp-4147.component';

describe('Comp4147Component', () => {
  let component: Comp4147Component;
  let fixture: ComponentFixture<Comp4147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
