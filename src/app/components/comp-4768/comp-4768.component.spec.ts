/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4768Component } from './comp-4768.component';

describe('Comp4768Component', () => {
  let component: Comp4768Component;
  let fixture: ComponentFixture<Comp4768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
