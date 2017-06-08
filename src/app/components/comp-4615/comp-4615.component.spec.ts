/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4615Component } from './comp-4615.component';

describe('Comp4615Component', () => {
  let component: Comp4615Component;
  let fixture: ComponentFixture<Comp4615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
