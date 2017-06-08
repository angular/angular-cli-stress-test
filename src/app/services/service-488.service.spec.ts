/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service488Service } from './service-488.service';

describe('Service488Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service488Service]
    });
  });

  it('should ...', inject([Service488Service], (service: Service488Service) => {
    expect(service).toBeTruthy();
  }));
});
