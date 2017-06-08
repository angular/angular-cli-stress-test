/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service858Service } from './service-858.service';

describe('Service858Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service858Service]
    });
  });

  it('should ...', inject([Service858Service], (service: Service858Service) => {
    expect(service).toBeTruthy();
  }));
});
