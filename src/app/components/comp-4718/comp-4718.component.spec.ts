/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4718Component } from './comp-4718.component';

describe('Comp4718Component', () => {
  let component: Comp4718Component;
  let fixture: ComponentFixture<Comp4718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
