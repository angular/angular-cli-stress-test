/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4508Component } from './comp-4508.component';

describe('Comp4508Component', () => {
  let component: Comp4508Component;
  let fixture: ComponentFixture<Comp4508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
