/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp503Component } from './comp-503.component';

describe('Comp503Component', () => {
  let component: Comp503Component;
  let fixture: ComponentFixture<Comp503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
