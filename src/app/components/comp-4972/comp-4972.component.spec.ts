/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4972Component } from './comp-4972.component';

describe('Comp4972Component', () => {
  let component: Comp4972Component;
  let fixture: ComponentFixture<Comp4972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
