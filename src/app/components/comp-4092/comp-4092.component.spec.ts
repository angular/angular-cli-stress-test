/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4092Component } from './comp-4092.component';

describe('Comp4092Component', () => {
  let component: Comp4092Component;
  let fixture: ComponentFixture<Comp4092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
