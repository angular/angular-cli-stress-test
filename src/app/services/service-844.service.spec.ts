/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service844Service } from './service-844.service';

describe('Service844Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service844Service]
    });
  });

  it('should ...', inject([Service844Service], (service: Service844Service) => {
    expect(service).toBeTruthy();
  }));
});
