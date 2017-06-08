/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp420Component } from './comp-420.component';

describe('Comp420Component', () => {
  let component: Comp420Component;
  let fixture: ComponentFixture<Comp420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
