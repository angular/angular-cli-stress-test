/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4189Component } from './comp-4189.component';

describe('Comp4189Component', () => {
  let component: Comp4189Component;
  let fixture: ComponentFixture<Comp4189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
