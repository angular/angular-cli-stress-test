/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4534Component } from './comp-4534.component';

describe('Comp4534Component', () => {
  let component: Comp4534Component;
  let fixture: ComponentFixture<Comp4534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
