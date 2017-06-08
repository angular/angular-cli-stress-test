/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp978Component } from './comp-978.component';

describe('Comp978Component', () => {
  let component: Comp978Component;
  let fixture: ComponentFixture<Comp978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
