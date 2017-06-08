/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4252Component } from './comp-4252.component';

describe('Comp4252Component', () => {
  let component: Comp4252Component;
  let fixture: ComponentFixture<Comp4252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
