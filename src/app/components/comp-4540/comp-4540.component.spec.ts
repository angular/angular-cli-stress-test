/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4540Component } from './comp-4540.component';

describe('Comp4540Component', () => {
  let component: Comp4540Component;
  let fixture: ComponentFixture<Comp4540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
