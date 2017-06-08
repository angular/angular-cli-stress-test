/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4263Component } from './comp-4263.component';

describe('Comp4263Component', () => {
  let component: Comp4263Component;
  let fixture: ComponentFixture<Comp4263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
