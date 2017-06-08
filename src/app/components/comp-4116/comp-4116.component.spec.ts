/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4116Component } from './comp-4116.component';

describe('Comp4116Component', () => {
  let component: Comp4116Component;
  let fixture: ComponentFixture<Comp4116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
