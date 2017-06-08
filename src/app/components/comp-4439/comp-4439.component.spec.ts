/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4439Component } from './comp-4439.component';

describe('Comp4439Component', () => {
  let component: Comp4439Component;
  let fixture: ComponentFixture<Comp4439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
