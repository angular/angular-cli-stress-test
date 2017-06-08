/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4935Component } from './comp-4935.component';

describe('Comp4935Component', () => {
  let component: Comp4935Component;
  let fixture: ComponentFixture<Comp4935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
