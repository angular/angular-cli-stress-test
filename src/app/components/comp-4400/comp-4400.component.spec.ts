/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4400Component } from './comp-4400.component';

describe('Comp4400Component', () => {
  let component: Comp4400Component;
  let fixture: ComponentFixture<Comp4400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
