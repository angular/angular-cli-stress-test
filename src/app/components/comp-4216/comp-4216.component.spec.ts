/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4216Component } from './comp-4216.component';

describe('Comp4216Component', () => {
  let component: Comp4216Component;
  let fixture: ComponentFixture<Comp4216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
