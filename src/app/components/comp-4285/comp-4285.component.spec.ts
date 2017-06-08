/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4285Component } from './comp-4285.component';

describe('Comp4285Component', () => {
  let component: Comp4285Component;
  let fixture: ComponentFixture<Comp4285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
