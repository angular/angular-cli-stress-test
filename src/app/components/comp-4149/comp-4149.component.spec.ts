/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4149Component } from './comp-4149.component';

describe('Comp4149Component', () => {
  let component: Comp4149Component;
  let fixture: ComponentFixture<Comp4149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
