/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp841Component } from './comp-841.component';

describe('Comp841Component', () => {
  let component: Comp841Component;
  let fixture: ComponentFixture<Comp841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
