/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4887Component } from './comp-4887.component';

describe('Comp4887Component', () => {
  let component: Comp4887Component;
  let fixture: ComponentFixture<Comp4887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
