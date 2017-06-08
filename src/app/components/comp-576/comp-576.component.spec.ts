/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp576Component } from './comp-576.component';

describe('Comp576Component', () => {
  let component: Comp576Component;
  let fixture: ComponentFixture<Comp576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
