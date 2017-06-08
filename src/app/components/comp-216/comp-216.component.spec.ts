/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp216Component } from './comp-216.component';

describe('Comp216Component', () => {
  let component: Comp216Component;
  let fixture: ComponentFixture<Comp216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
