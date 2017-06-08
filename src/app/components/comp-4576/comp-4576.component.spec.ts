/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4576Component } from './comp-4576.component';

describe('Comp4576Component', () => {
  let component: Comp4576Component;
  let fixture: ComponentFixture<Comp4576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
