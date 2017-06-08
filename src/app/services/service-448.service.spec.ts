/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service448Service } from './service-448.service';

describe('Service448Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service448Service]
    });
  });

  it('should ...', inject([Service448Service], (service: Service448Service) => {
    expect(service).toBeTruthy();
  }));
});
