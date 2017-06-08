/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4185Component } from './comp-4185.component';

describe('Comp4185Component', () => {
  let component: Comp4185Component;
  let fixture: ComponentFixture<Comp4185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
