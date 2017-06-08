/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp615Component } from './comp-615.component';

describe('Comp615Component', () => {
  let component: Comp615Component;
  let fixture: ComponentFixture<Comp615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
