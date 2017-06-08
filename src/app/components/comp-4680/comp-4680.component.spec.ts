/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4680Component } from './comp-4680.component';

describe('Comp4680Component', () => {
  let component: Comp4680Component;
  let fixture: ComponentFixture<Comp4680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
